# frozen_string_literal: true

class TrainSerializer < ActiveModel::Serializer
  attributes :id, :name, :detail
end