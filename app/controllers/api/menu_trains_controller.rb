# frozen_string_literal: true

class Api::MenuTrainsController < ApiController
  before_action :authenticate_user!, only: [:index]

  def index
    menu_train = current_user.menu_train
    return render_400('not created user menu.') if menu_train.nil?
    render json: memu_train
  end

  def create

  end
end
