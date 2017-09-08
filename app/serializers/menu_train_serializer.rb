class MenuTrainSerializer < ActiveModel::Serializer
  attributes :id, :trains, :menu

  def trains
    ActiveModel::SerializableResource.new(
      object.menu.trains,
      each_serializer: TrainSerializer
    )
  end

  def menu
    MenuSerializer.new(object.menu)
  end
end
