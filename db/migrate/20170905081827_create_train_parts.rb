class CreateTrainParts < ActiveRecord::Migration[5.1]
  def change
    create_table :train_parts do |t|
      t.integer :train_id, null: false
      t.integer :part_id, null: false

      t.timestamps
    end
  end
end
