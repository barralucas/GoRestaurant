<<<<<<< HEAD
import { useState, useEffect } from 'react';

import Header from '../../components/Header';
import api from '../../services/api';
import Food from '../../components/Food';
=======
import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import api from '../../services/api';
import { Food } from '../../components/Food';
>>>>>>> 13afcf2c99501885776a17be712c11836caa1e77
import ModalAddFood from '../../components/ModalAddFood';
import ModalEditFood from '../../components/ModalEditFood';
import { FoodsContainer } from './styles';

<<<<<<< HEAD
export interface FoodContent {
  id: number;
  name: string;
=======
type FoodProps = {
  id: number;
>>>>>>> 13afcf2c99501885776a17be712c11836caa1e77
  description: string;
  price: string;
  available: boolean;
  image: string;
<<<<<<< HEAD
}

export default function Dashboard() {

  const [foods, setFoods] = useState<FoodContent[]>();
  const [editingFood, setEditingFood] = useState<FoodContent>();
=======
};

export function Dashboard() {

  const [foods, setFoods] = useState<FoodProps[]>();
  const [editingFood, setEditingFood] = useState({});
>>>>>>> 13afcf2c99501885776a17be712c11836caa1e77
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    api.get('/foods')
      .then(response => setFoods(response.data))
<<<<<<< HEAD
      .catch(err => console.log(err.message))
  }, []);

  async function handleAddFood(food: FoodContent) {
=======
      .catch(err => console.log(err))
  }, []);

  async function handleAddFood(food: FoodProps) {
>>>>>>> 13afcf2c99501885776a17be712c11836caa1e77
    try {
      const response = await api.post('/foods', {
        ...food,
        available: true,
<<<<<<< HEAD
      })

      setFoods([...foods as FoodContent[], response.data]);
=======
      });

      setFoods([...foods, response.data]);
>>>>>>> 13afcf2c99501885776a17be712c11836caa1e77
    } catch (err) {
      console.log(err);
    }
  }

<<<<<<< HEAD
  async function handleUpdateFood(food: FoodContent) {
    try {
      const foodUpdated = await api.put(
        `/foods/${editingFood?.id}`,
        { ...editingFood, ...food },
      );

      const foodsUpdated = foods?.map(f =>
        f.id !== foodUpdated.data.id ? f : foodUpdated.data,
      );

      setFoods(foodsUpdated)
=======
  function toggleEditModal() {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditFood(food) {
    setEditingFood(food);
    editModalOpen(true);
  }

  async function handleUpdateFood(food) {
    try {
      const foodUpdated = await api.put(
        `/foods/${editingFood.id}`,
        { ...editingFood, ...food },
      );

      const foodsUpdated = foods.map(f =>
        f.id !== foodUpdated.data.id ? f : foodUpdated.data,
      );

      setFoods(foodsUpdated);
>>>>>>> 13afcf2c99501885776a17be712c11836caa1e77
    } catch (err) {
      console.log(err);
    }
  }

<<<<<<< HEAD
  async function handleDeleteFood(id: number) {
    await api.delete(`/foods/${id}`);

    const foodsFiltered = foods?.filter(food => food.id !== id);
=======
  async function handleDeleteFood(id) {
    await api.delete(`/foods/${id}`);

    const foodsFiltered = foods.filter(food => food.id !== id);
>>>>>>> 13afcf2c99501885776a17be712c11836caa1e77

    setFoods(foodsFiltered);
  }

  function toggleModal() {
<<<<<<< HEAD
    setModalOpen(!modalOpen)
  }

  function toggleEditModal() {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditFood(food: FoodContent) {
    setEditingFood(food);
    setEditModalOpen(true);
=======
    setModalOpen(!modalOpen);
>>>>>>> 13afcf2c99501885776a17be712c11836caa1e77
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />
      <ModalEditFood
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingFood={editingFood}
        handleUpdateFood={handleUpdateFood}
      />

      <FoodsContainer data-testid="foods-list">
        {foods &&
          foods.map(food => (
            <Food
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
            />
          ))}
      </FoodsContainer>
    </>
  );
<<<<<<< HEAD
}
=======
}

// class Dashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       foods: [],
//       editingFood: {},
//       modalOpen: false,
//       editModalOpen: false,
//     }
//   }

//   async componentDidMount() {
//     const response = await api.get('/foods');

//     this.setState({ foods: response.data });
//   }

//   handleAddFood = async food => {
//     const { foods } = this.state;

//     try {
//       const response = await api.post('/foods', {
//         ...food,
//         available: true,
//       });

//       this.setState({ foods: [...foods, response.data] });
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   handleUpdateFood = async food => {
//     const { foods, editingFood } = this.state;

//     try {
//       const foodUpdated = await api.put(
//         `/foods/${editingFood.id}`,
//         { ...editingFood, ...food },
//       );

//       const foodsUpdated = foods.map(f =>
//         f.id !== foodUpdated.data.id ? f : foodUpdated.data,
//       );

//       this.setState({ foods: foodsUpdated });
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   handleDeleteFood = async id => {
//     const { foods } = this.state;

//     await api.delete(`/foods/${id}`);

//     const foodsFiltered = foods.filter(food => food.id !== id);

//     this.setState({ foods: foodsFiltered });
//   }

//   toggleModal = () => {
//     const { modalOpen } = this.state;

//     this.setState({ modalOpen: !modalOpen });
//   }

//   toggleEditModal = () => {
//     const { editModalOpen } = this.state;

//     this.setState({ editModalOpen: !editModalOpen });
//   }

//   handleEditFood = food => {
//     this.setState({ editingFood: food, editModalOpen: true });
//   }

//   render() {
//     const { modalOpen, editModalOpen, editingFood, foods } = this.state;

//     return (
//       <>
//         <Header openModal={this.toggleModal} />
//         <ModalAddFood
//           isOpen={modalOpen}
//           setIsOpen={this.toggleModal}
//           handleAddFood={this.handleAddFood}
//         />
//         <ModalEditFood
//           isOpen={editModalOpen}
//           setIsOpen={this.toggleEditModal}
//           editingFood={editingFood}
//           handleUpdateFood={this.handleUpdateFood}
//         />

//         <FoodsContainer data-testid="foods-list">
//           {foods &&
//             foods.map(food => (
//               <Food
//                 key={food.id}
//                 food={food}
//                 handleDelete={this.handleDeleteFood}
//                 handleEditFood={this.handleEditFood}
//               />
//             ))}
//         </FoodsContainer>
//       </>
//     );
//   }
// };
>>>>>>> 13afcf2c99501885776a17be712c11836caa1e77
