import { Box, Flex, Heading, Link, useDisclosure } from '@chakra-ui/react'
import { memo, FC, useCallback } from 'react'
import { MenuIconButton } from '../../atoms/button/MenuIconButton'
import { MenuDrawer } from '../../molecules/MenuDrawer'
import { useNavigate } from 'react-router-dom'

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const navigate = useNavigate()
  const onClickHome = useCallback(() => {
    navigate('/home')
    onClose()
  }, [])
  const onClickUserManagement = useCallback(() => {
    navigate('/home/user_management')
    onClose()
  }, [])
  const onClickSetting = useCallback(() => {
    navigate('/home/setting')
    onClose()
  }, [])
  return (
    <>
      <Flex as="nav" bg="teal.500" color="gray.50" align="center" justify="space-between" padding={{ base: 3, md: 5 }}>
        <Flex align="center" as="a" mr={8} _hover={{ cursor: 'pointer' }}>
          <Heading as="a" fontSize={{ base: 'md', md: 'lg' }} onClick={onClickHome}>
            ユーザー管理アプリ
          </Heading>
        </Flex>

        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: 'none', md: 'flex' }}>
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>

      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  )
})
