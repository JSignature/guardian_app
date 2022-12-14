# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_10_02_174636) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.string "description"
    t.integer "activity_type"
    t.integer "user_id"
    t.integer "kid_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "guardians", force: :cascade do |t|
    t.boolean "is_primary"
    t.string "guardian_first_name"
    t.string "guardian_last_name"
    t.string "guardian_address_street"
    t.string "guardian_address_city"
    t.string "guardian_address_state"
    t.integer "guardian_address_zip"
    t.string "guardian_phone"
    t.string "guardian_email"
    t.string "guardian_image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "kids", force: :cascade do |t|
    t.string "kid_first_name"
    t.string "kid_last_name"
    t.string "kid_nickname"
    t.integer "kid_age"
    t.string "kid_gender"
    t.string "kid_group"
    t.string "kid_allergies"
    t.string "kid_notes"
    t.string "kid_image"
    t.integer "guardian_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "user_first_name"
    t.string "user_last_name"
    t.string "user_email"
    t.string "user_image"
    t.boolean "user_is_admin"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
