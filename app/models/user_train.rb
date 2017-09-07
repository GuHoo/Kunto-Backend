# frozen_string_literal: true
# == Schema Information
#
# Table name: user_trains
#
#  id         :integer          not null, primary key
#  train_id   :integer          not null
#  user_id    :integer          not null
#  count      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#


class UserTrain < ApplicationRecord
  belongs_to :user
  belongs_to :train
end
