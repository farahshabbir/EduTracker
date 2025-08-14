// ResultCard.tsx
import { forwardRef } from 'react';
import {
  Box,
  Typography,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Divider,
} from '@mui/material';

type Tests = {
  testName: string;
  subjects: Record<string, number>;
  total: number;
  percentage: number;
  grade: string;
};

type ResultCardProps = {
  data: {
    studentInfo: {
      name: string;
      fatherName: string;
      class: string;
      rollNo: string;
    };
    tests: Tests[];
    behaviour?: string;
    uniformCleanliness?: string;
    overallResult: {
      obtainedMarks: number;
      totalMarks: number;
      percentage: number;
      grade: string;
      status: string;
      remarks?: string;
    };
  };
};

const border = '1px solid #000';

export const ResultCard = forwardRef<HTMLDivElement, ResultCardProps>(
  ({ data }, ref) => {
    const subjectList = Object.keys(data.tests[0].subjects || {});
    return (
      <Box ref={ref} className="card-root" sx={{ p: 2 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            FARRUKH ACADEMY OF SCIENCE
          </Typography>
          <Typography variant="caption">
            Dhobi Ghat Stop Near Nafeerabad Graveyard Shalimar Town Lahore, +92
            324 0012215
          </Typography>
        </Box>

        <Typography align="center" sx={{ fontWeight: 700, mb: 1 }}>
          MONTHLY ASSESSMENT REPORT
        </Typography>

        {/* Student info */}
        <Grid container spacing={1} sx={{ mb: 1 }}>
          <Grid size={3}>
            <Box sx={{ border, p: 0.5, fontWeight: 700 }}>STUDENT’S NAME</Box>
          </Grid>
          <Grid size={3}>
            <Box sx={{ border, p: 0.5 }}>{data.studentInfo.name}</Box>
          </Grid>
          <Grid size={3}>
            <Box sx={{ border, p: 0.5, fontWeight: 700 }}>FATHER’S NAME</Box>
          </Grid>
          <Grid size={3}>
            <Box sx={{ border, p: 0.5 }}>{data.studentInfo.fatherName}</Box>
          </Grid>

          <Grid size={3}>
            <Box sx={{ border, p: 0.5, fontWeight: 700 }}>CLASS</Box>
          </Grid>
          <Grid size={3}>
            <Box sx={{ border, p: 0.5 }}>{data.studentInfo.class}</Box>
          </Grid>
          <Grid size={3}>
            <Box sx={{ border, p: 0.5, fontWeight: 700 }}>ROLL NO.</Box>
          </Grid>
          <Grid size={3}>
            <Box sx={{ border, p: 0.5 }}>{data.studentInfo.rollNo}</Box>
          </Grid>
        </Grid>

        {/* Results table */}
        <Table size="small" sx={{ border }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ border, fontWeight: 700 }}>
                Subjects / Tests
              </TableCell>
              {subjectList.map((s) => (
                <TableCell
                  key={s}
                  align="center"
                  sx={{ border, fontWeight: 700 }}
                >
                  {s}
                </TableCell>
              ))}
              <TableCell align="center" sx={{ border, fontWeight: 700 }}>
                Total
              </TableCell>
              <TableCell align="center" sx={{ border, fontWeight: 700 }}>
                %
              </TableCell>
              <TableCell align="center" sx={{ border, fontWeight: 700 }}>
                Grade
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.tests.map((t) => (
              <TableRow key={t.testName}>
                <TableCell sx={{ border }}>{t.testName}</TableCell>
                {subjectList.map((s) => (
                  <TableCell key={s} align="center" sx={{ border }}>
                    {t.subjects[s] ?? '-'}
                  </TableCell>
                ))}
                <TableCell align="center" sx={{ border }}>
                  {t.total}
                </TableCell>
                <TableCell align="center" sx={{ border }}>
                  {t.percentage.toFixed(2)}
                </TableCell>
                <TableCell align="center" sx={{ border }}>
                  {t.grade}
                </TableCell>
              </TableRow>
            ))}

            {/* Subject Totals row (optional: sum columns) */}
            <TableRow>
              <TableCell sx={{ border, fontWeight: 700 }}>
                Subject Total
              </TableCell>
              {subjectList.map((s) => {
                const sum = data.tests.reduce(
                  (acc, t) => acc + (t.subjects[s] ?? 0),
                  0
                );
                return (
                  <TableCell
                    key={s}
                    align="center"
                    sx={{ border, fontWeight: 700 }}
                  >
                    {sum}
                  </TableCell>
                );
              })}
              <TableCell align="center" sx={{ border, fontWeight: 700 }}>
                {data.tests.reduce((a, t) => a + t.total, 0)}
              </TableCell>
              <TableCell align="center" sx={{ border }} />
              <TableCell align="center" sx={{ border }} />
            </TableRow>
          </TableBody>
        </Table>

        {/* Behaviour / cleanliness */}
        <Grid container spacing={1} sx={{ mt: 1 }}>
          <Grid size={6}>
            <Box sx={{ border, p: 0.5 }}>
              Behaviour: <b>{data.behaviour || '—'}</b>
            </Box>
          </Grid>
          <Grid size={6}>
            <Box sx={{ border, p: 0.5 }}>
              Uniform & Cleanliness: <b>{data.uniformCleanliness || '—'}</b>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 1 }} />

        {/* Overall */}
        <Grid container spacing={1}>
          <Grid size={4}>
            <Box sx={{ border, p: 1 }}>
              <Typography fontWeight={700}>OVERALL RESULT</Typography>
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell>Obtained Marks</TableCell>
                    <TableCell align="right">
                      {data.overallResult.obtainedMarks}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Total Marks</TableCell>
                    <TableCell align="right">
                      {data.overallResult.totalMarks}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>%</TableCell>
                    <TableCell align="right">
                      {data.overallResult.percentage.toFixed(2)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Grade</TableCell>
                    <TableCell align="right">
                      {data.overallResult.grade}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">
                      {data.overallResult.status}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Grid>
          <Grid size={8}>
            <Box sx={{ border, p: 1, height: '100%' }}>
              <Typography fontWeight={700} gutterBottom>
                Remarks
              </Typography>
              <Typography sx={{ whiteSpace: 'pre-wrap' }}>
                {data.overallResult.remarks || ''}
              </Typography>
              <Grid container sx={{ mt: 5 }}>
                <Grid size={6}>
                  <Typography>
                    Principal’s Signature __________________
                  </Typography>
                </Grid>
                <Grid size={6}>
                  <Typography align="right">
                    Parent’s Signature __________________
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }
);
