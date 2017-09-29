# == Schema Information
#
# Table name: menus
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class MenuSerializer < ActiveModel::Serializer
  attributes :id, :name
end
