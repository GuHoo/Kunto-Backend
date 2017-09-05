class CreateTrainRecords < ActiveRecord::Migration[5.1]
  def change
    create_table :train_records do |t|
      t.datetime :train_date, null: false
      t.integer :count, null: false
      t.integer :set_number, null: false
      t.integer :train_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
