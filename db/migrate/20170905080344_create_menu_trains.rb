# frozen_string_literal: true

class CreateMenuTrains < ActiveRecord::Migration[5.1]
  def change
    create_table :menu_trains do |t|
      t.integer :menu_id, null: false
      t.integer :train_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
