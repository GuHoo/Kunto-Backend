# frozen_string_literal: true

class Api::MenusController < ApiController
  before_action :authenticate_user!, only: [:index]

  def index
    render json: MenuTrain.find_by(user_id: current_user.id)
  end
end
