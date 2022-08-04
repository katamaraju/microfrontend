import { Button, Col, Row, Select } from 'antd';
import React from 'react';

const { Option } = Select;

interface ISearchProps {
    onClickSearch: () => void;
}

class Search extends React.Component<ISearchProps, any> {

    state = {
        sportId: '',
        date: ''
    }

    handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

  render() {
      return(
                <>
                    <Row>
                        <Col span={8}>
                        Select Sport : 
                            <Select defaultValue="Football" style={{ width: 120 }} onChange={this.handleChange}>
                                <Option value="4">Football</Option>
                            </Select>
                        </Col>
                        <Col span={8}>
                            <Select defaultValue="Today" style={{ width: 120 }} onChange={this.handleChange}>
                                <Option value="Today">Today</Option>
                                <Option value="UpComing">UpComing</Option>
                            </Select>
                        </Col>
                        <Col span={8}>
                            <Button onClick={this.props.onClickSearch} type="primary">Search</Button>
                        </Col>
                    </Row>
                </>
      )
  }    
}
export default Search;