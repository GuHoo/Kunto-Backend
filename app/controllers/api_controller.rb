class ApiController < ActionController::API
  def render_400(message = 'Bad Request')
    render json: {
      message: message,
      status: 400
    }, status: 400
  end
end
