class Api::UsersController < ApiController
  def sign_up
    user = create_user
    if user
      render json: user
    else
      render_400 'Invalid params'
    end
  end

  def sign_in
    user = User.find_by_email(params[:email])
    if user.valid_password?(params[:password])
      render json: user
    else
      render_400
    end
  end

  private

  def create_user
    user = User.new(
      email: params['email'],
      password: params['password'],
      password_confirmation: params['password_confirmation']
    )
    user.save
    user.ensure_authentication_token
    user
  rescue
    false
  end
end
