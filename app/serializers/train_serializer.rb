# frozen_string_literal: true
# == Schema Information
#
# Table name: trains
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  detail     :text             default(""), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#


class TrainSerializer < ActiveModel::Serializer
  attributes :id, :name, :detail, :parts

  def parts
    object.parts.map {|p| PartSerializer.new(p)}
  end
end
