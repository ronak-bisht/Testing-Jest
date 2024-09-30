import {render,screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import UserForm from './UserForm'

test('it shows two inputs and a button',()=>{

    render(<UserForm/>)

    const inputs=screen.getAllByRole('textbox')
    // const button=screen.getByRole('button')
    const button=screen.getByRole('button')

    expect(inputs).toHaveLength(2)
    expect(button).toBeInTheDocument
})

test("it calls onUserAdd when form is submitted",()=>{
 
  // const input = screen.getAllByRole('textbox') // this is destructured
const mock=jest.fn()
  render(<UserForm onUserAdd={mock}/>)

  const [nameInput,emailInput]=screen.getAllByRole('textbox')
  user.click(nameInput)
  user.keyboard('jane')

  user.click(emailInput)
  user.keyboard('jabe@gmail.com')

  const button=screen.getByRole('button')
  user.click(button)

  expect(mock).toHaveBeenCalled()

  expect(mock).toHaveBeenCalledWith({name:"jane",email:"jabe@gmail.com"})

})