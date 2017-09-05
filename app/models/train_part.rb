# == Schema Information
#
# Table name: train_parts
#
#  id         :integer          not null, primary key
#  train_id   :integer          not null
#  part_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TrainPart < ApplicationRecord
  belongs_to :train
  belongs_to :part
end
