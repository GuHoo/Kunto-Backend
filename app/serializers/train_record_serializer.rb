# frozen_string_literal: true

class TrainRecordSerializer < ActiveModel::Serializer
  attributes :id, :train_id, :count
end
