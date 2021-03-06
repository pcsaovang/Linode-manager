import { StyleRulesCallback, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import Grid from 'src/components/Grid';

type ClassNames = 'root' | 'title';

const styles: StyleRulesCallback<ClassNames> = (theme) => ({
  root: {},
  title: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
});

interface Props {
  title: string;
  action?: () => JSX.Element | JSX.Element[] | null;
}

type CombinedProps = Props & WithStyles<ClassNames>;

const TableHeader: React.StatelessComponent<CombinedProps> = ({ classes, title, action }) => {
  return (
    <Grid container justify="space-between" alignItems="flex-end">
      <Grid item>
        <Typography role="header" variant="title" className={classes.title} data-qa-table={title}>
          {title}
        </Typography>
      </Grid>
      {action &&
        <Grid item>
          {action()}
        </Grid>
      }
    </Grid>
  );
};

const styled = withStyles(styles, { withTheme: true });

export default styled<Props>(TableHeader);
