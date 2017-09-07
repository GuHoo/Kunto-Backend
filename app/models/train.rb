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

class Train < ApplicationRecord
  has_many :menu_trains
  has_many :train_parts
  has_many :user_trains
  has_many :menu, through: :menu_trains
  has_many :parts, through: :train_parts
  has_many :users, through: :user_trains
  has_one :train_record
end
