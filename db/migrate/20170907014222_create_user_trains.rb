class CreateUserTrains < ActiveRecord::Migration[5.1]
  def change
    create_table :user_trains do |t|
      t.integer :train_id, null: false
      t.integer :user_id, null: false
      t.integer :count, null: false
      t.integer :set_count, null: false
      t.date :train_week_day, null: false

      t.timestamps
    end
  end
end
