class MenuTrainSerializer < ActiveModel::Serializer
  attributes :id, :trains, :menu, :today_menu

  def trains
    ActiveModel::SerializableResource.new(
      object.menu.trains,
      each_serializer: TrainSerializer
    )
  end

  def today_menu
    ActiveModel::SerializableResource.new(
      UserTrain.where(user_id: object.user_id, train_week_day: Date.current.wday),
      each_serializer: UserTrainSerializer
    )
  end

  def menu
    MenuSerializer.new(object.menu)
  end
end
