# == Schema Information
#
# Table name: parts
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class PartSerializer < ActiveModel::Serializer
  attributes :id, :name
end
