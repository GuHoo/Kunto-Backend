# == Schema Information
#
# Table name: trains
#
#  id         :integer          not null, primary key
#  name       :string
#  detail     :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Train < ApplicationRecord
  has_many :menu_trains
  has_many :train_parts
  has_many :menu, through: :menu_trains
  has_many :parts, through: :train_parts
  belongs_to :train_records
end
