class CreateKids < ActiveRecord::Migration[6.1]
  def change
    create_table :kids do |t|

      t.string :kid_first_name 
      t.string :kid_last_name 
      t.string :kid_nickname 
      t.integer :kid_age 
      t.string :kid_gender 
      t.string :kid_group 
      t.string :kid_allergies 
      t.string :kid_notes 
      t.string :kid_image 
      t.integer :guardian_id 

      t.timestamps
    end
  end
end
