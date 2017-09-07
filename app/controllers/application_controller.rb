# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  rescue_from Exception, with: :render_500
  rescue_from ActiveRecord::RecordNotFound, with: :render_404
  rescue_from ActionController::RoutingError, with: :render_404

  def render_404
    render json: { message: 'Not found', status: 404 }, status: 404
  end

  def render_500
    render json: { message: 'Internal Server Error', status: 500 }, status: 500
  end
end
