import React from 'react'

const CreateTask = () => {
  return (
    <div className="flex justify-center">
        <form className="w-full max-w-5xl bg-transparent border-2 border-emerald-600 p-6 space-y-6 rounded-xl">
          {/* Grouped Inputs */}
          <div className="grid grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-1">Task Title</h3>
              <input
                type="text"
                placeholder="Make a UI component"
                className="w-full bg-transparent border-2 border-emerald-600 px-3 py-2 rounded-md placeholder:text-white text-white outline-none"
              />
            </div>

            <div>
              <h3 className="font-semibold mb-1">Assign To</h3>
              <input
                type="text"
                placeholder="Employee name here"
                className="w-full bg-transparent border-2 border-emerald-600 px-3 py-2 rounded-md placeholder:text-white text-white outline-none"
              />
            </div>

            <div>
              <h3 className="font-semibold mb-1">Date</h3>
              <input
                type="date"
                className="w-full bg-transparent border-2 border-emerald-600 px-3 py-2 rounded-md text-white outline-none"
              />
            </div>

            <div>
              <h3 className="font-semibold mb-1">Category</h3>
              <input
                type="text"
                placeholder="design, dev, UI"
                className="w-full bg-transparent border-2 border-emerald-600 px-3 py-2 rounded-md placeholder:text-white text-white outline-none"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold mb-1">Description</h3>
            <textarea
              cols="30"
              rows="5"
              className="w-full bg-transparent border-2 border-emerald-600 px-3 py-2 rounded-md text-white placeholder:text-white outline-none"
              placeholder="Enter task description"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 font-semibold"
          >
            Create Task
          </button>
        </form>
      </div>

  )
}

export default CreateTask