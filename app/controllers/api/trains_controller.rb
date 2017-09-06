class Api::TrainsController < ApiController
  before_action :authenticate_user!, only: [:my_trains]

  def index
    render json: Train.all
  end

  def my_trains
    render json: current_user.trains
  end
end
