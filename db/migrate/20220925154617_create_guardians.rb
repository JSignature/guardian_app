class CreateGuardians < ActiveRecord::Migration[6.1]
  def change
    create_table :guardians do |t|

      t.boolean :is_primary
      t.string :guardian_first_name
      t.string :guardian_last_name
      t.string :guardian_address_street
      t.string :guardian_address_city
      t.string :guardian_address_state
      t.integer :guardian_address_zip
      t.string :guardian_phone
      t.string :guardian_email
      t.string :guardian_image


      t.timestamps
    end
  end
end
