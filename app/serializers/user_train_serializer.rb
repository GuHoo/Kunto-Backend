class UserTrainSerializer < ActiveModel::Serializer
  attributes :id, :train_id, :user_id, :count, :train_week_day, :set_count
end
