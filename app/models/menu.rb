# frozen_string_literal: true

# == Schema Information
#
# Table name: menus
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Menu < ApplicationRecord
  has_many :menu_trains
  has_many :trains, through: :menu_trains
end
