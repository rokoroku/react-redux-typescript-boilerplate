import * as React from 'react';
import * as classNames from 'classnames';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../constants/filters';
import * as style from './style.css';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
};

const FILTER_TYPES = [
  SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED
];

interface FooterProps {
  filter: TodoFilterType;
  activeCount: number;
  completedCount: number;
  onShow: (filter: TodoFilterType) => any;
  onClearCompleted: () => any;
};

interface FooterState {
  /* empty */
}

class Footer extends React.Component<FooterProps, FooterState> {

  renderTodoCount() {
    const { activeCount } = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items';

    return (
      <span className={style.count}>
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    );
  }

  renderFilterLink(filter: TodoFilterType) {
    const title = FILTER_TITLES[filter];
    const { filter: selectedFilter, onShow } = this.props;

    return (
      <a className={classNames({ [style.selected]: filter === selectedFilter })}
        style={{ cursor: 'pointer' }}
        onClick={() => onShow(filter)}>
        {title}
      </a>
    );
  }

  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props;
    if (completedCount > 0) {
      return (
        <button className={style.clearCompleted} onClick={onClearCompleted} >
          Clear completed
        </button>
      );
    }
  }

  render() {
    return (
      <footer className={style.normal}>
        {this.renderTodoCount()}
        <ul className={style.filters}>
          {FILTER_TYPES.map((filter) =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
        {this.renderClearButton()}
      </footer>
    );
  }
}

export default Footer;
