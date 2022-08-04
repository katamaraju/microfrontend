import * as React from 'react';
import { Subject } from 'rxjs';
import { Table } from 'antd';
import { Fixture } from '../../types/Fixture';


interface ISoccerGridProps {
    footBallFixtures: Fixture[];
  }

class FootballGird extends React.Component<ISoccerGridProps, any> {

  constructor(props: any) {
    super(props);
    this.state = {
        fixtures: [],
        columns: [],
        userData: {}
      };
  }
    
  componentDidMount(): void {
      // this.props.footBallFixtures; // .subscribe((fixturesData: Fixture[]) => {
        // this.setState({fixtures: this.props.footBallFixtures});
        const columns = [{
            title: 'Fixture Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'meeting',
            dataIndex: 'meeting',
            key: 'meeting',
          },
          {
            title: 'Sport',
            dataIndex: 'sport',
            key: 'sport',
          },
          {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
          },
          {
            title: 'Fixture ID',
            dataIndex: 'id',
            key: 'id',
          }
        ];

        this.setState({
            columns: columns
        });
    }

  render() {
    return (
        <Table columns={this.state.columns} dataSource={this.props.footBallFixtures} rowKey="id" />
    );
  }
}

export default FootballGird;
