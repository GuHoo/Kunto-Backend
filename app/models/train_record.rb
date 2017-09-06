# == Schema Information
#
# Table name: train_records
#
#  id         :integer          not null, primary key
#  train_date :datetime         not null
#  count      :integer          not null
#  set_number :integer          not null
#  train_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TrainRecord < ApplicationRecord
  belongs_to :user
  has_one :train
end
