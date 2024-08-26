
const UserAddForm = () => {
    return (
        <form action="" className=" border-2 border-red-500 h-fit">
            <div className=" border-4 border-green-500">
                <label for="name" className=" absolute top-1/2">Name:</label>
                <input type="text" id="name" name="name" required className=" border-2 border-yellow-500 w-1/3 h-20 rounded-xl"/>
            </div>

            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>

            <div>
                <label for="mobile">Mobile Number:</label>
                <input type="number" id="mobile" name="mobile" required />
            </div>

            <div>
                <label for="image">Profile Image:</label>
                <input type="image" id="image" name="image" required />
            </div>


            <button type="submit"></button>
        </form>
    )
}

export default UserAddForm
