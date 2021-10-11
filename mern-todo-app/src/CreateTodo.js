import React from 'react'
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"

export const CreateTodo = () => {
    const { register, handleSubmit } = useForm()
    const history = useHistory()

    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data))
        history.push("/")
    })

    return (
      <div className="CreateTodo">
        <div className="form__container">
          <h3>Create Todo Item</h3>
        </div>

        <form onSubmit={onSubmit} action="/">
          <label htmlFor="text">Text:</label>
          <input
            ref={register}
            type="text"
            name="text"
            placeholder="Todo"
            id="text"
          />
          <button type="submit">Create Todo </button>
        </form>
      </div>
    );
}
