# frozen_string_literal: true

# == Schema Information
#
# Table name: menu_trains
#
#  id         :integer          not null, primary key
#  menu_id    :integer          not null
#  train_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class MenuTrain < ApplicationRecord
  belongs_to :user
  belongs_to :menu
  belongs_to :train
end
