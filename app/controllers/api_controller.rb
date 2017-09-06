class ApiController < ActionController::API
  def render_400(message = 'Bad Request')
    render json: {
      message: message,
      status: 400
    }, status: 400
  end

  def current_user
    return nil unless params[:token]
    User.find_by(authentication_token: params[:token])
  end
end
