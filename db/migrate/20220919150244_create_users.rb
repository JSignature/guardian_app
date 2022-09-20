class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|

      t.string :user_first_name
      t.string :user_last_name
      t.string :user_email
      t.string :user_image
      t.boolean :user_is_admin
      t.string :password_digest

      t.timestamps
    end
  end
end

