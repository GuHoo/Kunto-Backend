# frozen_string_literal: true

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
    user = User.find_by(email: params[:email])
    if user&.valid_password?(params[:password]) || false
      user.ensure_authentication_token
      render json: user
    else
      render_400
    end
  end

  def sign_out
    user = User.find_by(authentication_token: params[:token])
    user.delete_authentication_token
    render json: { message: 'success', status: 200 }, status: 200
  rescue
    render_400 'Invalid params'
  end

  private

  def create_user
    user = User.find_by(email: params[:email])
    return false unless user.nil?
    user = User.new(
      email: params['email'],
      password: params['password'],
      password_confirmation: params['password_confirmation']
    )
    user.save!
    user.ensure_authentication_token
    user
  rescue
    false
  end
end
