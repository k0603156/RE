module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      postId: 1,
      title: '무계획으로 시작하였지만 알차게 보낸 1박 2일 여행',
      note: `갑작스럽게 시작한 여행이지만 10월에 핫한 축제지를 2곳이나 간 여행이었다.<br/>
      메인은 진주 유등축제를 기준으로 여행지를 선정하였다. < br / >
        유등축제에 가기전 통영에 들러 낮동안 맛있는 것도 먹고 노을도 보면서 시간을 보냈다. < br / >
        해 떨어지고 나서 유등축제를 보러 진주로 이동하였고, 줄기차게 걸어다니며 유등을 보았다. < br / >
        진주에 사람이 엄청 많았다. < br / >
        월요일 출근도 있어서 조금 고되더라도 숙소는 전주에 잡았다. < br / >
        마지막날 한옥마을도 지겹고, 그냥 쉬고 싶어서 전주에서 맛난거 먹고 수목원 산책을 한 후 올라왔다.
      `,
      images: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};