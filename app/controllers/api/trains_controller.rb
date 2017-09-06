# frozen_string_literal: true

class Api::TrainsController < ApiController
  def index
    render json: Train.all
  end
end
