class Project < ApplicationRecord
  belongs_to :user
  has_one_attached :file

  validates_presence_of :job_number
  validates_uniqueness_of :job_number
end
