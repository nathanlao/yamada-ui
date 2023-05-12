import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  NativeTable,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  NativeTableProps,
  ScrollArea,
  Box,
  defaultTheme,
} from '@yamada-ui/react'
import { FC, useState } from 'react'

export default {
  title: 'Components / Data Display / NativeTable',
  component: NativeTable,
} as ComponentMeta<typeof NativeTable>

export const basic: ComponentStory<typeof NativeTable> = () => {
  return (
    <>
      <NativeTable>
        <Thead>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>ドラゴンボール</Td>
            <Td>1986年2月26日 - 1989年4月19日</Td>
            <Td isNumeric>全153話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールZ</Td>
            <Td>1989年4月26日 - 1996年1月31日</Td>
            <Td isNumeric>全291話 + スペシャル2話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールGT</Td>
            <Td>1996年2月7日 - 1997年11月19日</Td>
            <Td isNumeric>全64話 + 番外編1話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール改</Td>
            <Td>2009年4月5日 - 2015年6月28日</Td>
            <Td isNumeric>全159話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール超</Td>
            <Td>2015年7月5日 - 2018年3月25日</Td>
            <Td isNumeric>全131話</Td>
          </Tr>
        </Tbody>

        <Tfoot>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Tfoot>
      </NativeTable>
    </>
  )
}

export const withSize: ComponentStory<typeof NativeTable> = () => {
  const Table: FC<NativeTableProps> = (props) => {
    return (
      <NativeTable {...props}>
        <Thead>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>ドラゴンボール</Td>
            <Td>1986年2月26日 - 1989年4月19日</Td>
            <Td isNumeric>全153話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールZ</Td>
            <Td>1989年4月26日 - 1996年1月31日</Td>
            <Td isNumeric>全291話 + スペシャル2話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールGT</Td>
            <Td>1996年2月7日 - 1997年11月19日</Td>
            <Td isNumeric>全64話 + 番外編1話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール改</Td>
            <Td>2009年4月5日 - 2015年6月28日</Td>
            <Td isNumeric>全159話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール超</Td>
            <Td>2015年7月5日 - 2018年3月25日</Td>
            <Td isNumeric>全131話</Td>
          </Tr>
        </Tbody>

        <Tfoot>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Tfoot>
      </NativeTable>
    )
  }

  return (
    <>
      <Table size='sm' />
      <Table size='md' />
      <Table size='lg' />
      <Table size='xl' />
    </>
  )
}

export const withVariant: ComponentStory<typeof NativeTable> = () => {
  const Table: FC<NativeTableProps> = (props) => {
    return (
      <NativeTable {...props}>
        <Thead>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>ドラゴンボール</Td>
            <Td>1986年2月26日 - 1989年4月19日</Td>
            <Td isNumeric>全153話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールZ</Td>
            <Td>1989年4月26日 - 1996年1月31日</Td>
            <Td isNumeric>全291話 + スペシャル2話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールGT</Td>
            <Td>1996年2月7日 - 1997年11月19日</Td>
            <Td isNumeric>全64話 + 番外編1話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール改</Td>
            <Td>2009年4月5日 - 2015年6月28日</Td>
            <Td isNumeric>全159話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール超</Td>
            <Td>2015年7月5日 - 2018年3月25日</Td>
            <Td isNumeric>全131話</Td>
          </Tr>
        </Tbody>

        <Tfoot>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Tfoot>
      </NativeTable>
    )
  }

  return (
    <>
      <Table variant='simple' />
      <Table variant='striped' />
    </>
  )
}

export const withColorStyle: ComponentStory<typeof NativeTable> = () => {
  const Table: FC<NativeTableProps> = (props) => {
    return (
      <NativeTable {...props}>
        <Thead>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>ドラゴンボール</Td>
            <Td>1986年2月26日 - 1989年4月19日</Td>
            <Td isNumeric>全153話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールZ</Td>
            <Td>1989年4月26日 - 1996年1月31日</Td>
            <Td isNumeric>全291話 + スペシャル2話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールGT</Td>
            <Td>1996年2月7日 - 1997年11月19日</Td>
            <Td isNumeric>全64話 + 番外編1話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール改</Td>
            <Td>2009年4月5日 - 2015年6月28日</Td>
            <Td isNumeric>全159話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール超</Td>
            <Td>2015年7月5日 - 2018年3月25日</Td>
            <Td isNumeric>全131話</Td>
          </Tr>
        </Tbody>

        <Tfoot>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Tfoot>
      </NativeTable>
    )
  }

  return (
    <>
      <Table variant='striped' colorStyle='primary' />

      <Table variant='striped' colorStyle='secondary' />

      <Table variant='striped' colorStyle='warning' />

      <Table variant='striped' colorStyle='danger' />

      <Table variant='striped' colorStyle='link' />

      <Table variant='striped' colorStyle='gray' />

      <Table variant='striped' colorStyle='red' />

      <Table variant='striped' colorStyle='orange' />

      <Table variant='striped' colorStyle='yellow' />

      <Table variant='striped' colorStyle='green' />

      <Table variant='striped' colorStyle='teal' />

      <Table variant='striped' colorStyle='blue' />

      <Table variant='striped' colorStyle='cyan' />

      <Table variant='striped' colorStyle='purple' />

      <Table variant='striped' colorStyle='pink' />

      <Table variant='striped' colorStyle='linkedin' />

      <Table variant='striped' colorStyle='facebook' />

      <Table variant='striped' colorStyle='messenger' />

      <Table variant='striped' colorStyle='whatsapp' />

      <Table variant='striped' colorStyle='twitter' />

      <Table variant='striped' colorStyle='line' />

      <Table variant='striped' colorStyle='instagram' />

      <Table variant='striped' colorStyle='youtube' />
    </>
  )
}

export const withColumnBorders: ComponentStory<typeof NativeTable> = () => {
  return (
    <>
      <NativeTable withColumnBorders>
        <Thead>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>ドラゴンボール</Td>
            <Td>1986年2月26日 - 1989年4月19日</Td>
            <Td isNumeric>全153話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールZ</Td>
            <Td>1989年4月26日 - 1996年1月31日</Td>
            <Td isNumeric>全291話 + スペシャル2話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールGT</Td>
            <Td>1996年2月7日 - 1997年11月19日</Td>
            <Td isNumeric>全64話 + 番外編1話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール改</Td>
            <Td>2009年4月5日 - 2015年6月28日</Td>
            <Td isNumeric>全159話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール超</Td>
            <Td>2015年7月5日 - 2018年3月25日</Td>
            <Td isNumeric>全131話</Td>
          </Tr>
        </Tbody>

        <Tfoot>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Tfoot>
      </NativeTable>
    </>
  )
}

export const withBorder: ComponentStory<typeof NativeTable> = () => {
  return (
    <>
      <NativeTable withBorder>
        <Thead>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>ドラゴンボール</Td>
            <Td>1986年2月26日 - 1989年4月19日</Td>
            <Td isNumeric>全153話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールZ</Td>
            <Td>1989年4月26日 - 1996年1月31日</Td>
            <Td isNumeric>全291話 + スペシャル2話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールGT</Td>
            <Td>1996年2月7日 - 1997年11月19日</Td>
            <Td isNumeric>全64話 + 番外編1話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール改</Td>
            <Td>2009年4月5日 - 2015年6月28日</Td>
            <Td isNumeric>全159話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール超</Td>
            <Td>2015年7月5日 - 2018年3月25日</Td>
            <Td isNumeric>全131話</Td>
          </Tr>
        </Tbody>

        <Tfoot>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Tfoot>
      </NativeTable>
    </>
  )
}

export const withHighlightOnHover: ComponentStory<typeof NativeTable> = () => {
  return (
    <>
      <NativeTable highlightOnHover>
        <Thead>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>ドラゴンボール</Td>
            <Td>1986年2月26日 - 1989年4月19日</Td>
            <Td isNumeric>全153話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールZ</Td>
            <Td>1989年4月26日 - 1996年1月31日</Td>
            <Td isNumeric>全291話 + スペシャル2話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールGT</Td>
            <Td>1996年2月7日 - 1997年11月19日</Td>
            <Td isNumeric>全64話 + 番外編1話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール改</Td>
            <Td>2009年4月5日 - 2015年6月28日</Td>
            <Td isNumeric>全159話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール超</Td>
            <Td>2015年7月5日 - 2018年3月25日</Td>
            <Td isNumeric>全131話</Td>
          </Tr>
        </Tbody>

        <Tfoot>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Tfoot>
      </NativeTable>
    </>
  )
}

export const withCaption: ComponentStory<typeof NativeTable> = () => {
  return (
    <>
      <NativeTable>
        <TableCaption placement='top'>©バードスタジオ/集英社・東映アニメーション</TableCaption>

        <Thead>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>ドラゴンボール</Td>
            <Td>1986年2月26日 - 1989年4月19日</Td>
            <Td isNumeric>全153話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールZ</Td>
            <Td>1989年4月26日 - 1996年1月31日</Td>
            <Td isNumeric>全291話 + スペシャル2話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールGT</Td>
            <Td>1996年2月7日 - 1997年11月19日</Td>
            <Td isNumeric>全64話 + 番外編1話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール改</Td>
            <Td>2009年4月5日 - 2015年6月28日</Td>
            <Td isNumeric>全159話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール超</Td>
            <Td>2015年7月5日 - 2018年3月25日</Td>
            <Td isNumeric>全131話</Td>
          </Tr>
        </Tbody>

        <Tfoot>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Tfoot>
      </NativeTable>

      <NativeTable>
        <TableCaption placement='bottom'>©バードスタジオ/集英社・東映アニメーション</TableCaption>

        <Thead>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>ドラゴンボール</Td>
            <Td>1986年2月26日 - 1989年4月19日</Td>
            <Td isNumeric>全153話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールZ</Td>
            <Td>1989年4月26日 - 1996年1月31日</Td>
            <Td isNumeric>全291話 + スペシャル2話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボールGT</Td>
            <Td>1996年2月7日 - 1997年11月19日</Td>
            <Td isNumeric>全64話 + 番外編1話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール改</Td>
            <Td>2009年4月5日 - 2015年6月28日</Td>
            <Td isNumeric>全159話</Td>
          </Tr>
          <Tr>
            <Td>ドラゴンボール超</Td>
            <Td>2015年7月5日 - 2018年3月25日</Td>
            <Td isNumeric>全131話</Td>
          </Tr>
        </Tbody>

        <Tfoot>
          <Tr>
            <Th>作品名</Th>
            <Th>放送期間</Th>
            <Th isNumeric>話数</Th>
          </Tr>
        </Tfoot>
      </NativeTable>
    </>
  )
}

export const withStickyHeader: ComponentStory<typeof NativeTable> = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <ScrollArea w='full' h='xs' onScrollPositionChange={({ y }) => setIsScrolled(y !== 0)}>
      <NativeTable>
        <Thead
          position='sticky'
          top={0}
          bg={['white', 'black']}
          transitionProperty='box-shadow'
          transitionDuration='slow'
          boxShadow={isScrolled ? 'md' : undefined}
        >
          <Tr>
            <Th>Name</Th>
            <Th isNumeric>Rem</Th>
            <Th isNumeric>Pixel</Th>
            <Th>Progress</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>xs</Td>
            <Td isNumeric>0.25rem</Td>
            <Td isNumeric>4px</Td>
            <Td>
              <Box maxW='0.25rem' h='9xs' bg='red.500'></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>sm</Td>
            <Td isNumeric>0.5rem</Td>
            <Td isNumeric>8px</Td>
            <Td>
              <Box maxW='0.5rem' h='9xs' bg='red.500'></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>md</Td>
            <Td isNumeric>1rem</Td>
            <Td isNumeric>16px</Td>
            <Td>
              <Box maxW='1rem' h='9xs' bg='red.500'></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>normal</Td>
            <Td isNumeric>1.5rem</Td>
            <Td isNumeric>24px</Td>
            <Td>
              <Box maxW='1.5rem' h='9xs' bg='red.500'></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>lg</Td>
            <Td isNumeric>2rem</Td>
            <Td isNumeric>32px</Td>
            <Td>
              <Box maxW='2rem' h='9xs' bg='red.500'></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>xl</Td>
            <Td isNumeric>3rem</Td>
            <Td isNumeric>48px</Td>
            <Td>
              <Box maxW='3rem' h='9xs' bg='red.500'></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>2xl</Td>
            <Td isNumeric>4.5rem</Td>
            <Td isNumeric>72px</Td>
            <Td>
              <Box maxW='4.5rem' h='9xs' bg='red.500'></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>3xl</Td>
            <Td isNumeric>6rem</Td>
            <Td isNumeric>96px</Td>
            <Td>
              <Box maxW='6rem' h='9xs' bg='red.500'></Box>
            </Td>
          </Tr>
          <Tr>
            <Td>4xl</Td>
            <Td isNumeric>10rem</Td>
            <Td isNumeric>160px</Td>
            <Td>
              <Box maxW='10rem' h='9xs' bg='red.500'></Box>
            </Td>
          </Tr>
          {Object.entries(defaultTheme.spaces)
            .filter(([key]) => !isNaN(Number(key)))
            .sort(([a], [b]) => Number(a) - Number(b))
            .map(([key, value]) => {
              return (
                <Tr key={key}>
                  <Td>{key}</Td>
                  <Td isNumeric>{value}</Td>
                  <Td isNumeric>{`${parseFloat(value) * 16}px`}</Td>
                  <Td>
                    <Box maxW={value} h='9xs' bg='green.500'></Box>
                  </Td>
                </Tr>
              )
            })}
        </Tbody>
      </NativeTable>
    </ScrollArea>
  )
}
