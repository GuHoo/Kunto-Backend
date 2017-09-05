# == Schema Information
#
# Table name: parts
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Part < ApplicationRecord
  has_many :train_parts
  has_many :parts, through: :train_parts
end
