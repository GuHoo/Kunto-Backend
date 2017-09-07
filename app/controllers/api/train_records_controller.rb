# frozen_string_literal: true

class Api::TrainRecordsController < ApiController
  before_action :authenticate_user!, only: [:create]

  def create
    render_400('Invalid parameter') && return if invalid_params?
    record = TrainRecord.new(train_record_params)
    record.save!
    render json: record, status: 201
  rescue ActiveRecord::RecordInvalid => e
    logger.info(e.message)
    render_404('Train record not founded')
  end

  private

  def train_record_params
    set_number = current_user.train_records.today_records.count + 1
    params.permit(:train_id, :count, :train_date).merge(
      user_id: current_user.id,
      set_number: set_number
    )
  end

  def invalid_params?
    params[:train_id].blank? || params[:count].blank?
  end
end
