import React from 'react';
import BlocksTable from '../../components/blocklist';

export default function(props) {
  return (
    <div className="container p-home">
      <h1 className="p-home-title">Latest Blocks</h1>
      <hr />
      <BlocksTable className="p-home-blockList" />
    </div>
  );
}
