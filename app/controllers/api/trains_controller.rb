class Api::TrainsController < ApiController
  def index
    render json: Train.all
  end
end
