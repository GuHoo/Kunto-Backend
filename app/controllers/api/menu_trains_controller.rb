# frozen_string_literal: true

class Api::MenuTrainsController < ApiController
  before_action :authenticate_user!, only: %i[index create]

  def index
    menu_train = current_user.menu_train
    return render_400('not created user menu.') if menu_train.nil?
    render json: memu_train
  end

  def create
    menu = Menu.create(name: name)
    menu_trains.each { |menu_train| create_menu_train(menu_train, menu.id) }
    render json: {
      id: menu.id,
      name: menu.name,
      train_ids: menu.train_ids
    }, status: 201
  rescue InvalidParameterError => e
    render_400(e.message)
  rescue ActiveRecord::RecordInvalid => e
    render_404(e.message)
  end

  private

  def name
    n = params[:menu].fetch(:name)
    raise InvalidParameterError, 'Did not expected empty name' unless n
    n
  end

  def menu_trains
    mt = params[:menu].fetch(:menu_trains)
    raise InvalidParameterError, 'Did not expected empty menu_trains' unless mt
    mt
  end

  def create_menu_train(menu_train, menu_id)
    train_id = menu_train.fetch(:train_id)
    count = menu_train.fetch(:count)
    raise InvalidParameterError, 'Did not expected empty train_id of menu_trains' if train_id.blank?
    raise InvalidParameterError, 'Did not expected empty count of menu_trains' if count.blank?
    UserTrain.create!(user_id: current_user.id, train_id: train_id, count: count)
    MenuTrain.create!(user_id: current_user.id, train_id: train_id, menu_id: menu_id)
  end
end
