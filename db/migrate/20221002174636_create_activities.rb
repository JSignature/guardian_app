class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|

      t.string :description
      t.integer :activity_type
      t.integer :user_id
      t.integer :kid_id

      t.timestamps
    end
  end
end
