# frozen_string_literal: true

class TrainSerializer < ActiveModel::Serializer
  attributes :id, :name, :detail, :parts

  def parts
    object.parts.map {|p| PartSerializer.new(p)}
  end
end
