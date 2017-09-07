# frozen_string_literal: true

class Api::TrainRecordsController < ApplicationController
  before_action :authenticate_user!, only: [:create]

  def create
    return render_400('Invalid parameter') if invalid_params?
    record = TrainRecord.new(train_record_params)
    record.save!
    render json: record
  rescue ActiveRecord::RecordInvalid => e
    logger.info(e.message)
    render_404('Train record not founded')
  end

  private

  def train_record_params
    params.permit(:train_id, :count).merge(user_id: current_user.id)
  end

  def invalid_params?
    params[:train_id].blank? || params[:count].blank?
  end
end
